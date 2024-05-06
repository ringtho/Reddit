import Comment from '../Comment/Comment'
import './Comments.scss'
import { useGetPostCommentsQuery } from '../../api/services/postsData'
import CommentsSkeleton from '../CommentsSkeleton/CommentsSkeleton'

const Comments = ( { permalink }) => {
  const { data, isLoading } = useGetPostCommentsQuery(permalink)

  return (
    <section className="comments_container">
      {isLoading && <CommentsSkeleton comments={3} />}
      {!isLoading && (
        <>
          {data[1]?.data?.children.map((commentData) => {
            if (commentData.kind === 't1') {
              return (
                <Comment key={commentData.data.id} data={commentData?.data} />
              )
            }
            return null
          })}
        </>
      )}
    </section>
  )
}

export default Comments