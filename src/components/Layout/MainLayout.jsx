import { SignInButton } from "../../features/auth/components/SignInButton";
import { WithdrawalButton } from "../../features/users/components/WithdrawalButton";

export const MainLayout = () => {
  return (
    <>
    <SignInButton text={"会員登録・ログイン"} />
    <WithdrawalButton />
    </>
  )
}