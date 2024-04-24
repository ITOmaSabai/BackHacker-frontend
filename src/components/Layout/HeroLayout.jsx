import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useSpring, animated } from 'react-spring';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styleForHero = {
  backgroundImage: "url('/heroImage.jpg')",
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.4)",
  // backgroundBlendMode: "lighten"
};

export const FadeInText = ({ text, delay, duration }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: delay,
    config: { duration: duration }
  });

  return (
    <animated.div style={props}>{text}</animated.div>
  );
};

export const HeroLayout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/map");
  }
  return (
    <>
      <Box sx={{height: "100%", display: "flex", alignItems: "center", position: "relative"}} bgcolor={"primary.dark"}  >
        <Box sx={{mx: 20}} >
          <Typography variant="h1" color={"white"} sx={{mb: 1}} >
            <FadeInText text={"BackHacker."} delay={300} />
          </Typography>
          <Typography variant="h4" color={"white"} sx={{mb: 7}} >
            <FadeInText text={"バーチャル旅行に出かけよう"} delay={700} />
          </Typography>
          <FadeInText
            text={
              <Button onClick={handleClick} variant="outlined" color="info" sx={{mx: 1, mb: 3}} size="large" >
                <Typography fontSize={"20px"} >🌏 旅を始める</Typography>
              </Button>
            }
            delay={1500}
          />
        </Box>
        <Box sx={{position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)'}}>
          <Typography color="white" fontSize="30px" >
            <FadeInText text={<ExpandMoreIcon fontSize="30px" />} delay={2200} />
          </Typography>
        </Box>
      </Box>
      <Box sx={{height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}} bgcolor={"primary.dark"} style={styleForHero} >
        <Box sx={{width: "60%"}}>
          <Typography fontSize={"60px"} color={"black"} fontWeight={"bold"} sx={{mb: 3}}>ひらけPC。行くぞ海外。</Typography>
          <Typography fontSize={"24px"} color={"black"} >BackHacker.は、「自宅にいながらPC1台でバックパッカー」をコンセプトとした、バーチャル旅行好きのためのエンタメアプリです。</Typography>
          <Typography fontSize={"24px"} color={"black"} >地図を見ながら、世界中の国や都市の街歩き動画を楽しんで、旅行気分を味わうことができます。</Typography>
          <Typography fontSize={"24px"} color={"black"} sx={{mt: 3}} >PC1台で、知らない土地に気軽にトリップしてみませんか？</Typography>
        </Box>
      </Box>
      <Box sx={{height: "100vh", display: "flex", flexDirection: "column", text: "center", alignItems: "center"}} bgcolor={"primary.dark"} >
        <Typography fontSize={"32px"} color={"white"} sx={{pt: 10}}>BackHacker.でできること</Typography>
        <Box sx={{display: "flex", height: "50vh", alignItems: "center"}} >
          <Grid container spacing={5} style={{ width: '80%', margin: '0 auto' }}>
            <Grid item xs={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
              <OndemandVideoIcon fontSize="large" color="secondary"/>
              <Typography fontSize="36px" color={"white"} sx={{mb: 2}} >世界中の街の動画を楽しむ</Typography>
              <Typography fontSize="16px" color={"white"} >地図上をクリックして、<span>スポット</span>(気になる場所)を投稿してみよう！世界中どこでも、街の様子がわかる動画を自動で探します🤖動画を見て旅行気分を味わおう！</Typography>
            </Grid>
            <Grid item xs={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
              <GroupsIcon fontSize="large" color="secondary"/>
              <Typography fontSize="36px" color={"white"} sx={{mb: 2}} >みんなの投稿したスポットを見にいく</Typography>
              <Typography fontSize="16px" color={"white"} >みんなの投稿したスポットを見てみよう！旅行で訪れた思い出の場所、地元のおすすめスポット、地図から見つけたヘンなところ？なんでもアリ！思い思いのスポットを巡ってみて✨</Typography>
            </Grid>
            <Grid item xs={4} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"flex-start"}>
              <ThumbUpIcon fontSize="large" color="secondary"/>
              <Typography fontSize="36px" color={"white"} sx={{mb: 2}} >コメント、いいね、シェアでつながる</Typography>
              <Typography fontSize="16px" color={"white"} >気に入った投稿にはいいね👍とコメントして交流しよう！さらに自分の投稿したスポットをSNSでシェアすれば、みんなが楽しんでくれるかも？</Typography>
            </Grid>
          </Grid>
        </Box>
        <Button onClick={handleClick} variant="contained" color="info" sx={{mt: 8, py: 2, px: 6}} size="large" ><Typography fontSize={"20px"} >BackHacker.で旅を始める 🌏</Typography></Button>
      </Box>
    </>
  )
}