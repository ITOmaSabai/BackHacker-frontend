import { Button, IconButton } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useFlashMessage } from "../../../contexts/FlashMessageContext";
import { deleteComment } from "../api/deleteComment";

export const DeleteComment = ({ commentId, currentUser, setCommentDeleted }) => {
  const { setMessage, setIsSuccessMessage } = useFlashMessage();

  const handleDeleteClick = async () => {
    try {
      await deleteComment(currentUser, commentId, setIsSuccessMessage);
      setMessage("削除しました");
      setCommentDeleted(true);
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <IconButton variant="contained" color="error" onClick={handleDeleteClick} ><DeleteForeverIcon /></IconButton>
  )
}