import React, {useState, useEffect} from 'react';
import { Typography, Box, Grid, Container, Paper } from '@mui/material'
import MedicationIcon from '@mui/icons-material/Medication';
import MasksIcon from '@mui/icons-material/Masks';
import SpaIcon from '@mui/icons-material/Spa';
import Groups2Icon from '@mui/icons-material/Groups2';
import banner from "../../img/banner.png"

const Introduction= () => {

    const [isMobile, setIsMobile] = useState(false)
 
    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
      })
    return (
        <Box>
            <Container>
                <img src={banner} className="banner"/>
                {!isMobile ? <Box sx={{display: "block", margin: "0 auto", padding: "10px", backgroundColor: "#0CF2B4", width: "600px", borderRadius: "50px", marginBottom: "15px"}}>
                        <p className='title'> KHÁM BỆNH TẬN <span className='special-title'>TÂM</span>, NÂNG  <span className='special-title'>TẦM</span> SỨC KHỎE </p> 
                    </Box> : <Box sx={{display: "block", margin: "0 auto", padding: "10px", backgroundColor: "#0CF2B4", maxWidth: "400px", borderRadius: "50px", marginBottom: "15px"}}>
                        <p className='title-2'> KHÁM BỆNH TẬN <span className='special-title-2'>TÂM</span>, NÂNG  <span className='special-title-2'>TẦM</span> SỨC KHỎE </p> 
                    </Box>  }
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{display: "flex", alignItems: "center"}}>  
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        
                        <Typography variant="body1" sx={{fontWeight: 400, marginBottom: "15px"}}>
                            HEALTECH là app cung cấp cho người dùng thông tin liên quan về các loại thuốc cũng như tương tác tư vấn, chăm sóc cho người bệnh từ xa thông qua các tính năng
                        </Typography> 
                        <Grid container>
                            <Grid item xs={6} sx={{padding: "20px"}}>
                                <Paper elevation={2} sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "130px"}}>
                                    <MedicationIcon sx={{fontSize: "70px", marginTop: "15px"}}/>
                                    <Typography variant="body2" sx={{fontWeight: 700, fontStyle: "italic", textAlign: "center"}}>Tra cứu thông tin, đặt và mua thuốc</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sx={{padding: "20px"}}>
                                <Paper elevation={2} sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "130px"}}>
                                    <MasksIcon sx={{fontSize: "70px", marginTop: "15px"}}/>
                                    <Typography variant="body2" sx={{fontWeight: 700, fontStyle: "italic", textAlign: "center"}}>Tư vấn bác sĩ</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sx={{padding: "20px"}}>
                                <Paper elevation={2} sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "130px"}}>
                                    <SpaIcon sx={{fontSize: "70px", marginTop: "15px"}}/>
                                    <Typography variant="body2" sx={{fontWeight: 700, fontStyle: "italic", textAlign: "center"}}>Y học cổ truyền</Typography>
                                </Paper>
                            </Grid>
                            <Grid item xs={6} sx={{padding: "20px"}}>
                                <Paper elevation={2} sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "130px"}}>
                                    <Groups2Icon sx={{fontSize: "70px", marginTop: "15px"}}/>
                                    <Typography variant="body2" sx={{fontWeight: 700, fontStyle: "italic", textAlign: "center"}}>Xây dựng cộng đồng</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>  
            </Container>
            
            
        </Box>
        
    )
}

export default Introduction