import React from 'react';
import { Typography, Box, Grid, Container, Paper } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle';

const ObjectAndValue = () => {
    return (
        <Box>
            <Container sx={{borderRadius: "20px"}}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{padding: "20px", marginTop: "50px", backgroundColor: "#34568B"}}> 
                        <Box sx={{display: "flex", margin: "15px 0"}}>
                            <span className='special-title'>TÍN - TÂM - TRÍ - TỐC - TINH - NHÂN</span>
                        </Box>   
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px", color: "white"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500, color: "white"}}>Tín trong từng hành động</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px", color: "white"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500, color: "white"}}>Tâm trong từng việc làm</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px", color: "white"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500, color: "white"}}>Trí trong từng chức năng</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px", color: "white"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500, color: "white"}}>Tốc độ hiệu quả trong mỗi công việc</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px", color: "white"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500, color: "white"}}>Tinh trong từng con người</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px", color: "white"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500, color: "white"}}> Nhân ở cả con người, lời nói lẫn việc làm</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{padding: "20px",marginTop: "50px", border: "2px solid #34568B"}}>
                        <Box sx={{display: "flex", margin: "15px 0"}}>
                            <span className='special-title'>TẦM NHÌN</span>
                        </Box> 
                        <Typography variant="body1" sx={{fontWeight: 500, marginBottom: "15px"}}>
                            Trong 5 năm sắp tới, HEALTECH định hướng trở thành một App đi đầu trong công nghệ khám, chữa bệnh và chăm sóc sức khỏe toàn diện từ xa cho tất cả mọi người, nhất là trong thời đại công nghệ 4.0 và sau ảnh hưởng của đại dịch. App sẽ là một người thân vô hình nhưng luôn dõi theo tất cả mọi người từ thành phố đến nông thôn, giàu đến nghèo, hoàn cảnh tốt đến hoàn cảnh khó khăn.
                        </Typography>   
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500}}>Là cánh tay đắc lực giúp san sẻ gánh nặng cho các cơ sở y tế, cho nền y tế Việt Nam</Typography>
                        </Box>
                        <Box sx={{display: "flex", alignItems: "center", marginBottom: "5px"}}>
                            <CircleIcon sx={{fontSize: "8px", margin: "0 10px"}}/>
                            <Typography variant="body1" sx={{fontWeight: 500}}>Trở thành chuỗi dịch vụ hệ sinh thái hàng đầu Việt Nam</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            
            
        </Box>
        
    )
}

export default ObjectAndValue