function reg(args)

ts=subwrd(args,1)
te=subwrd(args,2)
ts1=ts+2
te1=te-2
tt=te-ts+1

'reset'
'set t 'ts' 'te
* Barents seas 
'sicpav=aave(100*sic.1,lon=0,lon=90,lat=75,lat=85)'

'set t 1'
'sicpavm=ave(sicpav,t='ts',t='te')'
'set t 'ts' 'te
'sicanom=sicpav-sicpavm'

'set t 'ts1' 'te1
'sicanomfil=ave(sicanom,t-2,t+2)'
'sicanomfiht=sicanom-sicanomfil'
'sicanomfihav=ave(sicanomfiht,t='ts1',t='te1')'
'sicanomfih=sicanomfiht-sicanomfihav'
'set t 1'
'sicvar=ave(pow(sicanomfih,2),t='ts1',t='te1')'

'set dfile 2'
'set x 1'
'set lat 70 78'
'set z 15 35'

'set t 1'
'tav2d=ave(output.2,t='ts',t='te')'
'set t 'ts' 'te
'tanom2d=(output.2)-tav2d'

'set t 'ts1' 'te1
'tanom2dfil=ave(tanom2d,t-2,t+2)'
'tanom2dfiht=tanom2d-tanom2dfil'
'tanom2dfih=tanom2dfiht-ave(tanom2dfiht,t='ts1',t='te1')'
'cova2d=sicanomfih*tanom2dfih'

'set t 'ts1
'tvar2d=ave(pow(tanom2dfih,2),t='ts1',t='te1')'
'cor2d=ave(cova2d,t='ts1',t='te1')/sqrt(sicvar)/sqrt(tvar2d)'
'reg2d=ave(cova2d,t='ts1',t='te1')/sqrt(sicvar)'
'covvar2d=ave(pow(cova2d/sqrt(sicvar)-reg2d,2),t='ts1',t='te1')'
'tstat2d=abs(ave(cova2d/sqrt(sicvar),t='ts1',t='te1'))/sqrt(covvar2d)*sqrt('tt')'

'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/rgbset.gs'

'set vpage 0. 8.5 0. 5'
'set grads off'
'set display color white'
'set mpdraw on'
'set rgb 17 100 100 100'
'set map 17 1 6'
'set xlopts 1 5 0.2'
'set ylopts 1 5 0.2'
'set grid on 5 1'
'set xlint 1'
'set gxout shaded'
*'set ccols  49 48 47 46 44 43 0 23 24 25 66 67 68'
*'set clevs  -0.25 -0.2 -0.15 -0.1 -0.05 -0.01 0.01 0.05 0.1 0.15 0.2 0.25'
'set rbcols 16'
'set cmax -1e10'
'd const(reg2d,-1e11,-u)'
'set clevs  0 10 20 30'
'set ccols  0 22 73 24 25'
'd maskout(cor2d*cor2d*100,tstat2d-1.7)'
'run /Users/martinpking/work_8jul2011.dir/from_martin_king_scratch/some_grads_scripts.dir/scripts/cbar.gs 1. 0 4.8 0.3'
* cbar.gs sf vert xmid ymid

'set gxout contour'
'set clab off'
'set cint 0.5e6'
'set cmax -0.01'
*'set ccolor 1'
'set ccolor 58'
*'set clevs -15 -10 -5'
'set clopts -1 -1 0.2'
*'set clskip 2'
'set cstyle 2'
'set cthick 8'
'd reg2d'
'set cint 0.5e6'
'set cmin 0.01'
'set cstyle 1'
*'set ccolor 1'
'set ccolor 69'
*'set ccolor 28'
*'set clevs 3 6 9 12 15 18 21 24'
'd reg2d'
*'set clevs 0'
*'set ccolor 1'
*'set cstyle 1'
*'set grads off'
*'set mpdraw off'
*'set cthick 12'
*'set clopts -1 -1 0.2'
*'set clab on'
*'d reg2d'


return


