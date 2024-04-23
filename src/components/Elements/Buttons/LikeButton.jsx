import { IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ClickedLikeIcon } from "../../../features/likes/components/ClickedLikeIcon";
import { createLike } from "../../../features/likes/api/createLike";
import { deleteLike } from "../../../features/likes/api/deleteLike";
import { useSpotsContext } from "../../../contexts/SpotsContext";
import { useFirebaseAuth } from "../../../hooks/useFirebaseAuth";
import MessageModal from "../Modals/MessageModal";

export const LikeButton = ({ savedLikes, selectedSpot }) => {
  const [ likedCount, setLikedCount ] = useState(0);
  const [ likeId, setLikeId ] = useState();
  const [ on, setOn ] = useState(false);
  const { spots, loadSpots } = useSpotsContext();
  const { currentUser, userId } = useFirebaseAuth();
  const [ open, setOpen ] = useState(false);

  const title = "ログインすると「いいね」ができます！";
  const body = "投稿者に気持ちを伝えましょう！"
  const icon = "😘 ❤️";

  // スポットにsavedLikes(いいね配列)が存在していれば、配列の長さを取得して、いいね数とする
  useEffect(() => {
    if (savedLikes) {
      setLikedCount(savedLikes.length);
    }
  }, [savedLikes])

  // ログイン中のユーザーがいいね済みであれば、いいねidを特定する
  // ログイン中のユーザーがいいね済みであれば、いいね済みボタンを表示する
  useEffect(() => {
    if (currentUser && userId && savedLikes) {
      const likeByCurrentUser = savedLikes.find(like => like.user_id === parseInt(userId));

      if (likeByCurrentUser && likeByCurrentUser !== null) {
        setLikeId(likeByCurrentUser.id);
        setOn(true);
      } else {
        setOn(false);
      }
    } else {
      setOn(false);
    }
  }, [currentUser, savedLikes, spots, userId])

  // いいねボタンを押した時の処理
  // いいね済みでなければ、いいねを作成し、いいね済みボタンを表示する
  // いいね済みであれば、いいねを削除し、いいね前のボタンを表示する
  const handleLikeButtonClick = async () => {
    if (currentUser) {
      if (!on) {
        await createLike(currentUser, selectedSpot);
        setOn(true);
      } else {
        await deleteLike(currentUser, likeId);
        setOn(false);
      }
      loadSpots();
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <MessageModal
        open={open}
        setOpen={setOpen}
        title={title}
        body={body}
        icon={icon}
        button={"login"}
      />
      <IconButton
        onClick={handleLikeButtonClick}
        sx={{height: "30px", width: "10px", mr: 1}}
        disableRipple
      >
        <ClickedLikeIcon on={on}/>
      </IconButton>
      {likedCount > 0 && <Typography color={on ? "#d600a6" : "#979797"} fontWeight={"bold"} >{likedCount}</Typography> }
    </>
  )
}