function xsea

'reinit'
'sdfopen oras4_u_gbkseas_1979_2013.nc'
'sdfopen oras4_theta_gbkseas_1979_2013.nc'

'set z 1 35'
'set x 1 115'
'set y 1 20'
'set t 1 420'

'set sdfwrite -flt oras4_ut_gbkseas_1979_2013.nc'
*t=10
*tmax=432
'one=1+0*lat'

*'set gxout fwrite'

*while t<=tmax
* say t
* 'set t 't
* 'd ave(-uo.1*mvadv(one,thetao.2),z=1,z=4)'
* 'define output=-uo.1*muadv(one,thetao.2)'
 'define output=uo.1*(thetao.2+273)'
 'sdfwrite output'
* t=t+12
*endwhile

*'disable fwrite'

return
