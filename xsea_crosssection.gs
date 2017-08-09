function xsea
*calculating rho cp T v

'reinit'
'sdfopen oras4_ut_gbkseas_aug_1979_2013.nc'

'set x 39'
'set y 1 20'
'set z 1 35'
'set t 1'

*earth radius
'define a=6371000'
'define dy=cdiff(lat,y)*3.1416/180*a'
*'define dx=cdiff(lon,x)*3.1416/180*a*cos(lat*3.1416/180)'
'define rho=1025'
'define cp=3850'

'set fwrite oras4_heatfluxu_lon18_5_gbkseas_aug_1979_2013.grd'
'set gxout fwrite'

t=1
tmax=35
while t<=tmax
 say t
 'set t 't
  'd const(rho*cp*output.1,-9.99e30,-u)'
  t=t+1
endwhile

'disable fwrite'

return
