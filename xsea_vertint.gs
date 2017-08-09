function xsea
*calculating int_z rho cp T v dA

'reinit'
'sdfopen oras4_ut_gbkseas_dec_1979_2013.nc'

'set x 1 115'
'set y 1 20'
'set t 1'

*earth radius
'define a=6371000'
'define dy=cdiff(lat,y)*3.1416/180*a'
'define dx=cdiff(lon,x)*3.1416/180*a*cos(lat*3.1416/180)'
'define rho=1025'
'define cp=3850'

'set fwrite oras4_heatfluxu_vertint_gbkseas_dec_1979_2013.grd'
'set gxout fwrite'

t=1
while t<=35
 'vertavg=const(output.1,0,-a)'
  z=1
  'set t 't
  say t
 while z<=35
  'set z 'z
  'vertavg=vertavg+const(output.1,0,-u)*(lev(z='z')-lev(z='z+1'))*dy'
  z=z+1
 endwhile
 'd vertavg*rho*cp'
 t=t+1
endwhile



return
