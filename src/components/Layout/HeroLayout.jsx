import { Box, Button, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useSpring, animated } from 'react-spring';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef } from "react";

const styleForHero = {
  backgroundImage: "url('/heroImage.jpg')",
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.2)",
  backgroundBlendMode: "lighten"
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
  const scrollToMidRef = useRef(null);
  const scrollToBottomRef = useRef(null);

  const handleClick = () => {
    navigate("/map");
  }

  const scrollToMid = () => {
    if(scrollToMidRef.current) {
      scrollToMidRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    if(scrollToBottomRef.current) {
      scrollToBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}
        bgcolor={"primary.dark"}
      >
        <Box sx={{mx: { xs: 2, sm:10, md: 20}}} >
          <Typography
            color={"white"}
            sx={{
              mb: 1,
              typography: {
                xs: "h3",
                sm: "h1"
              }
            }}
          >
            <FadeInText text={"BackHacker."} delay={300} />
          </Typography>
          <Typography
            color={"white"}
            sx={{
              mb: 7,
              typography: {
                xs: "h6",
                sm: "h4"
              },
              fontWeight: {
                xs: "none"
              }
            }}
          >
            <FadeInText text={"バーチャル旅行に出かけよう"} delay={600} />
          </Typography>
          <FadeInText
            text={
              <Button onClick={handleClick} variant="outlined" color="info" sx={{mx: 1, mb: 3}} size="large" >
                <Typography
                  fontSize={ {xs: "12px", sm: "20px", md: "20px"}}
                >
                  🌏 旅を始める
                </Typography>
              </Button>
            }
            delay={1100}
          />
        </Box>
        <Box
          sx={{position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)'}}
          onClick={scrollToMid}
        >
          <Typography color="white" fontSize="40px" >
            <FadeInText text={<ExpandMoreIcon fontSize="40px" />} delay={1800} />
          </Typography>
        </Box>
      </Box>
      <Box
        ref={scrollToMidRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        bgcolor={"primary.dark"}
        style={styleForHero}
      >
        <Box
          sx={{width: {xs: "90%", sm: "80%"} }}
        >
          <Typography
            fontSize={{ xs: "24px", sm: "50px", md: "60px" }}
            color={"black"}
            fontWeight={"bold"}
            sx={{mb: 3}}
          >
            ひらけPC。行くぞ海外。
          </Typography>
          <Typography
            fontSize={{ xs: "16px", sm: "24px"}}
            color={"black"}
          >
            BackHacker.は、「自宅にいながらPC1台でバックパッカー」をコンセプトとした、バーチャル旅行好きのためのエンタメアプリです。</Typography>
          <Typography
            fontSize={{ xs: "16px", sm: "24px"}}
            color={"black"}
          >
            地図を見ながら、世界中の国や都市の街歩き動画を楽しんで、旅行気分を味わうことができます。
          </Typography>
          <Typography
            fontSize={{ xs: "16px", sm: "24px"}}
            color={"black"}
            sx={{mt: 3}}
          >
            PC1台で、知らない土地に気軽にトリップしてみませんか？
          </Typography>
        </Box>

        {/* スクロールボタン */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16, left: '50%',
            transform: 'translateX(-50%)',
          }}
          onClick={scrollToBottom}
        >
          <Button
            color="secondary"
            variant={{ xs: "outlined", sm: "contained" }}
            sx={{py: 1}}
          >
            <Typography
              fontSize="16px"
              fontWeight="bold"
              display={{ xs: "none", sm: "block" }}
            >
              BackHacker.でできること
            </Typography>
            <ExpandMoreIcon display={{ xs: "block", sm: "none" }} />
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "calc(100vh - 2.5rem)",
          display: "flex",
          flexDirection: "column",
          text: "center",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "none" },
          px: { xs: 1 },
          pb: { xs: 3, sm: 1 },
        }}
        bgcolor={"primary.dark"}
        ref={scrollToBottomRef}
      >
        <Typography
          fontSize={{ xs: "20px", sm: "32px" }}
          color={"white"}
          sx={{pt: { xs: 2, sm: 8, md: 8 }}}
        >
          BackHacker.でできること
        </Typography>
        <Box
          sx={{
            display: "flex",
            height: { xs: "100%", md: "100%" },
            flexDirection: { xs: "row", sm: "column" },
            alignItems: "center",
            justifyContent: "center", // 追加
            mt: { xs: 4, sm: 8 }
          }}
        >
          <Grid
            container
            spacing={{ xs: 1, sm: 3, md: 3 }}
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: '80%', lg: "90%" },
              mb: { xs: 0, sm: 1 },
              justifyContent: "center", // 追加
              alignItems: "flex-start" // 追加
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              sx={{mb: { xs: 3 }}}
            >
              <OndemandVideoIcon fontSize="large" color="secondary"/>
              <Typography
                display={{ xs: "block", md: "none", lg: "block" }}
                fontSize={{ xs: "16px", sm: "24px", md: "36px" }}
                color={"white"}
                sx={{mb: 2}}
              >
                世界中の街の動画を楽しむ
              </Typography>
              <Typography
                display={{ xs: "none", md: "block", lg: "none" }}
                fontSize={{ xs: "16px", sm: "24px", md: "30px" }}
                color={"white"}
                sx={{mb: 2, minHeight: "140px"}}
              >
                世界中の街の動画を楽しむ
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "16px" }}
                color={"white"}
              >
                地図上をクリックして、<span>スポット</span>(気になる場所)を投稿してみよう！世界中どこでも、街の様子がわかる動画を自動で探します🤖動画を見て旅行気分を味わおう！
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              sx={{mb: { xs: 3 }}}
            >
              <GroupsIcon fontSize="large" color="secondary"/>
              <Typography
                display={{ xs: "block", md: "none", lg: "block" }}
                fontSize={{ xs: "16px", sm: "24px", md: "36px" }}
                color={"white"}
                sx={{mb: 2}}
              >
                みんなの投稿したスポットを見にいく
              </Typography>
              <Typography
                display={{ xs: "none", md: "block", lg: "none" }}
                fontSize={{ xs: "16px", sm: "24px", md: "30px" }}
                color={"white"}
                sx={{mb: 2, minHeight: "140px"}}
              >
                みんなの投稿したスポットを見にいく
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "16px" }}
                color={"white"}
              >
                みんなの投稿したスポットを見てみよう！旅行で訪れた思い出の場所、地元のおすすめスポット、地図から見つけたヘンなところ？なんでもアリ！思い思いのスポットを巡ってみて✨
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              sx={{mb: { xs: 3 }}}
            >
              <ThumbUpIcon fontSize="large" color="secondary"/>
              <Typography
                display={{ xs: "block", md: "none", lg: "block" }}
                fontSize={{ xs: "16px", sm: "24px", md: "36px" }}
                color={"white"}
                sx={{mb: 2}}
              >
                コメント、いいね、シェアでつながる
              </Typography>
              <Typography
                display={{ xs: "none", md: "block", lg: "none" }}
                fontSize={{ xs: "16px", sm: "24px", md: "30px" }}
                color={"white"}
                sx={{mb: 2, minHeight: "140px"}}
              >
                コメント、いいね、シェアでつながる
              </Typography>
              <Typography
                fontSize={{ xs: "12px", sm: "16px" }}
                color={"white"} >気に入った投稿にはいいね👍とコメントして交流しよう！さらに自分の投稿したスポットをSNSでシェアすれば、みんなが楽しんでくれるかも？</Typography>
            </Grid>
          </Grid>
        </Box>
        <Button
          onClick={handleClick}
          variant="contained"
          color="info"
          sx={{mt: { xs: 3, sm: 2, md: 3 }, py: { xs: 1, sm: 2 }, px: { xs: 2,  md: 6 }}}
        >
          <Typography fontSize={{ xs: "16px", md: "20px" }} >
            遊んでみる 🌏
          </Typography>
        </Button>
      </Box>
    </>
  )
}