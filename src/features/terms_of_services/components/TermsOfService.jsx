import { Box, Typography } from "@mui/material"

export const TermsOfService = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", px: 15, py: 2 }} >
      <Box display="flex" justifyContent="center" sx={{pb: 5}}>
        <Typography variant="h4" fontWeight="bold" >利用規約</Typography>
      </Box>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", gap: 5}} >
        <Box>
          <Typography >
            この利用規約（以下、「本規約」といいます。）は、このウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。
          </Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}}  >第1条（適用）</Typography>
          <Typography >本規約は、ユーザーと本サービスとの間の本サービスの利用に関わる一切の関係に適用されるものとします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第2条（利用登録）</Typography>
          <Typography >本サービスにおいては、登録希望者が本規約に同意の上、本サービスの定める方法によって利用登録を申請し、本サービスがこの承認を登録希望者に通知することによって、利用登録が完了するものとします。</Typography>
          <Typography >ユーザー登録とログインにGoogleアカウントを使用する場合、Googleの利用規約とプライバシーポリシーも適用されることを認識することとします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第3条（ユーザーIDおよびパスワードの管理）</Typography>
          <Typography >ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。ユーザーは、いかなる場合にも、ユーザーIDおよびパスワードを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。本サービスは、ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には、そのユーザーIDを登録しているユーザー自身による利用とみなします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第4条（禁止事項）</Typography>
          <Typography >ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</Typography>
          <ul>
            <li><Typography >法令または公序良俗に違反する行為</Typography></li>
            <li><Typography >犯罪行為に関連する行為</Typography></li>
            <li><Typography >第三者の著作権を侵害する行為</Typography></li>
            <li><Typography >他の利用者への迷惑行為</Typography></li>
          </ul>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第5条（本サービスの提供の停止等）</Typography>
          <Typography >本サービスは、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第6条（著作権）</Typography>
          <Typography >ユーザーは、自ら著作権等の必要な知的財産権を有するか、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本サービスを利用し、投稿ないしアップロードすることができるものとします。</Typography>
          <Typography >本サービスで利用されているGoogle MapサービスやYouTubeサービスを利用して表示されるコンテンツ（地図情報、動画、画像など）の著作権は、それぞれのサービス提供者に帰属します。</Typography>
          <Typography >ユーザーが投稿するコンテンツに関しては、投稿したユーザー自身が権利を保持しますが、ユーザーは本サービス内での表示や機能の提供を目的とした非独占的な利用権を本サービスに許諾することとします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第7条（利用制限および登録抹消）</Typography>
          <Typography >本サービスは、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、投稿データを削除し、ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。</Typography>
          <ul >
            <li >
              <Typography >本規約のいずれかの条項に違反した場合</Typography>
            </li>
            <li >
            <Typography >その他、本サービスが本サービスの利用を適当でないと判断した場合</Typography>
            </li>
          </ul>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第8条（サービス内容の変更等）</Typography>
          <Typography >本サービスは、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第9条（利用規約の変更）</Typography>
          <Typography >本サービスは以下の場合には、ユーザーの個別の同意を要せず、本規約を変更することができます。本規約の変更がユーザーの一般の利益に適合するとき。変更が合理的であるとき。本サービスは、変更内容とその効力発生時期をユーザーに事前に通知します。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第10条（個人情報の取扱い）</Typography>
          <Typography >本サービスは、本サービスの利用によって取得する個人情報については、本サービス「プライバシーポリシー」に従い適切に取り扱うものとします。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第11条（通知または連絡）</Typography>
          <Typography >ユーザーと本サービスとの間の通知または連絡は、本サービスの定める方法によって行います。連絡先に変更がない限り、現在登録されている連絡先が有効とみなされます。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第12条（権利義務の譲渡の禁止）</Typography>
          <Typography >ユーザーは、本サービスの書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</Typography>
        </Box>
        <Box>
          <Typography fontWeight="bold" sx={{pb: 2}} >第13条（免責事項）</Typography>
          <Typography >本サービスを通じてアクセスされるGoogle MapやYouTubeのコンテンツに関連するいかなる問題についても、本サービスは責任を負わないものとします。</Typography>
          <Typography >ユーザー間のコミュニケーションや投稿内容に関する責任は、各ユーザーにあることとします。</Typography>
        </Box>
      </Box>
      <Box sx={{py: 5}}>
        <Typography >以上、利用規約とする</Typography>
      </Box>
    </Box>
  )
}