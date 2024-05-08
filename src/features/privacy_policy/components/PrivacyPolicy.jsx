import { Box, Button, Typography } from "@mui/material"
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 1つ前の画面に戻る
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", px: 20, py: 2 }} >
        <Box display="flex" justifyContent="center" sx={{pb: 5}}>
          <Typography variant="h4" fontWeight="bold" >プライバシーポリシー</Typography>
        </Box>
        <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 5}} >
          <Box>
            <Typography >
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight="bold" sx={{pb: 1}}  >お客様から取得する情報</Typography>
            <ul>
              <li><Typography >氏名(ニックネームやペンネームも含む)</Typography></li>
              <li><Typography >メールアドレス</Typography></li>
              <li><Typography >写真や動画</Typography></li>
              <li><Typography >外部サービスでお客様が利用するID</Typography></li>
              <li><Typography >外部サービスのプライバシー設定によりお客様が連携先に開示を認めた情報</Typography></li>
              <li><Typography >Cookie(クッキー)を用いて生成された識別情報</Typography></li>
            </ul>
          </Box>
          <Box>
            <Typography fontWeight="bold" sx={{pb: 1}} >お客様の情報を利用する目的</Typography>
            <ul>
              <li><Typography >当サービスに関する登録の受付、お客様の本人確認、認証のため</Typography></li>
              <li><Typography >お客様の当サービスの利用履歴を管理するため</Typography></li>
              <li><Typography >お客様からのお問い合わせに対応するため</Typography></li>
              <li><Typography >当サービスの規約や法令に違反する行為に対応するため</Typography></li>
            </ul>
          </Box>
          <Box>
            <Typography fontWeight="bold" sx={{pb: 1}} >第三者提供</Typography>
            <Typography >当サービスは、個人データについては、お客様の同意なく第三者に提供しません。ただし、以下の例外があります：</Typography>
            <ul>
              <li><Typography >個人データの取扱いを外部に委託する場合</Typography></li>
              <li><Typography >当サービスが買収された場合</Typography></li>
              <li><Typography >事業パートナーと共同利用する場合</Typography></li>
              <li><Typography >法律によって第三者提供が許されている場合</Typography></li>
            </ul>
          </Box>
          <Box>
            <Typography fontWeight="bold" sx={{pb: 1}} >プライバシーポリシーの変更</Typography>
            <Typography >当サービスは、必要に応じて、プライバシーポリシーを変更します。変更後のプライバシーポリシーは、効力発生前に適切な方法で周知または通知します。</Typography>
          </Box>
        </Box>
        <Box sx={{py: 5}}>
          <Typography >2024年5月8日 制定</Typography>
        </Box>
        <Box>
          <Button variant="text" onClick={goBack} sx={{ width: 'auto' }} >
            <ArrowBackIcon />戻る
          </Button>
        </Box>
      </Box>
    </>
  )
}