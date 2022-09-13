import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import type { NextPage } from 'next'
import { Face } from '../../components/Face'
import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

interface PageProps {
  id: string,
  users: User[]
}

interface faceProps {
  id: string,
  name: string
}

const UserId: NextPage<PageProps> = ({ id, users }) => {
  return (
    <div>
      User詳細ページ, { id }
      <Face id={id} name="name"/>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
    
  )
}

// // 静的なファイルを生成する場合
// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: ["/users/1"],
//     fallback: false
//   } 
// }
// 
// // 静的なファイルを生成する場合
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   return {
//     props: {
//       id: params?.id
//     }
//   }
// }

// 動的にファイルを生成する場合
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Bob"
  //   }
  // })
  const users = await prisma.user.findMany()
  console.log(users)
  return {
    props: {
      id: params?.id,
      users
    }
  } 
}

export default UserId
