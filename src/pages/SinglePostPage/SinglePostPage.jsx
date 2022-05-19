import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CommentForm,
  MobileMenu,
  Navbar,
  PersonCard,
  PostCard,
  Sidebar,
  Comment,
  EditCommentModal,
} from "../../components";

import { getComments } from "../../redux/features/post/postThunk";

export function SinglePostPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.posts);
  const commentsArr = useSelector((state) => state.post.comments);
  const reverseCommentArr = [...commentsArr].reverse();
  const { postId } = useParams();
  const singlePost = posts.find((post) => post._id === postId);
  const { editCommentModal } = useSelector((state) => state.modal);
  useEffect(() => {
    dispatch(getComments(postId));
  }, []);
  return (
    <div className="lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col">
      <Navbar />
      <ToastContainer />
      {editCommentModal && <EditCommentModal />}

      <div className="min-h-screen grid grid-cols-1   lg:grid-layout">
        <Sidebar />
        <div>
          <PostCard {...singlePost} />
          <CommentForm />
          {reverseCommentArr.map((comment) => (
            <Comment key={comment._id} {...comment} />
          ))}
        </div>
        <div className="hidden border lg:flex flex-col  sticky top-[48px] h-[calc(100vh_-_48px)] gap-4 pt-2 border-r pb-3">
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}
