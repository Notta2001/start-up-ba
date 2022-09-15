import React from 'react';
import { Typography, Box, Grid, Container, Paper } from '@mui/material'
import thang from "../../img/thang.jpg"
import xuan from "../../img/xuan.jpg"
import phuong from "../../img/phuong.jpg"
import minh from "../../img/minh.jpg"
import long from "../../img/long.jpg"
const Team = () => {
    return (
        <Box>
            <Container sx={{marginTop: "50px"}}>
                <Typography variant="h5" sx={{textAlign: "center", color: "#0CF2B4", fontWeight: 900, marginBottom: "30px"}}>ĐỘI NGŨ</Typography>
                <Grid container sx={{justifyContent: "space-between"}}>
                    <Grid item xs={6} sm={6} md={2} lg={2} xl={2} sx={{marginBottom: "15px"}}>
                        <Paper elevation={2} sx={{height: "200px", display: "flex", flexDirection: "column", alignItems: "center", width: "95%", padding: "30px 0", margin: "0 auto"}}>
                            <img src={thang} className="team-img"/>
                            <Typography variant="body1" sx={{fontSize: "13px", fontWeight: 700, marginTop: "20px"}} align="center" >Đoàn Viết Thắng</Typography>
                        </Paper>
                    </Grid>   
                    <Grid item xs={6} sm={6} md={2} lg={2} xl={2} sx={{marginBottom: "15px"}} >
                        <Paper elevation={2} sx={{height: "200px", display: "flex", flexDirection: "column", alignItems: "center", width: "95%", padding: "30px 0", margin: "0 auto"}}>
                            <img src={xuan} className="team-img"/>
                            <Typography variant="body1" sx={{fontSize: "13px", fontWeight: 700, marginTop: "20px"}}  align="center">Nguyễn Thị Thanh Xuân</Typography>
                        </Paper>
                    </Grid>     
                    <Grid item xs={6} sm={6} md={2} lg={2} xl={2} sx={{marginBottom: "15px"}} >
                        <Paper elevation={2} sx={{height: "200px", display: "flex", flexDirection: "column", alignItems: "center", width: "95%", padding: "30px 0", margin: "0 auto"}}>
                            <img src={phuong} className="team-img"/>
                            <Typography variant="body1" sx={{fontSize: "13px", fontWeight: 700, marginTop: "20px"}} align="center">Lê Thị Hoài Phương</Typography>
                        </Paper>
                    </Grid>     
                    <Grid item xs={6} sm={6} md={2} lg={2} xl={2} sx={{marginBottom: "15px"}} >
                        <Paper elevation={2} sx={{height: "200px", display: "flex", flexDirection: "column", alignItems: "center", width: "95%", padding: "30px 0", margin: "0 auto"}}>
                            <img src={minh} className="team-img"/>
                            <Typography variant="body1" sx={{fontSize: "13px", fontWeight: 700, marginTop: "20px"}} align="center">Lê Đức Minh</Typography>
                        </Paper>
                    </Grid>                      
                    <Grid item xs={6} sm={6} md={2} lg={2} xl={2} sx={{marginBottom: "15px"}} >
                        <Paper elevation={2} sx={{height: "200px", display: "flex", flexDirection: "column", alignItems: "center", width: "95%", padding: "30px 0", margin: "0 auto"}}>
                            <img src={long} className="team-img"/>
                            <Typography variant="body1" sx={{fontSize: "13px", fontWeight: 700, marginTop: "20px"}} align="center">Nguyễn Vũ Hoàng Long</Typography>
                        </Paper>
                    </Grid>        
                </Grid>
            </Container>
        </Box>
        
    )
}

export default Team