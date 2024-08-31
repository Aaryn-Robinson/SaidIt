import React, { useState } from 'react';

//library for loading states
import Skeleton from 'react-loading-skeleton';
//components for upvotes and downvotes from react-icon library
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';


const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post, onToggleComments } = props;
    /**
   * @param {number} newValue The new vote value
   */

    const onHandleVote = (newValue) => {
        if (newValue === voteValue){
            setVoteValue(0);
        }
        else if (newValue === 1){
            setVoteValue(1)
        } else{
            setVoteValue(-1)
        }
    };

    const renderUpVote = () => {
        if (voteValue === 1){
            return <TiArrowUpThick className="icon-action" />;
        }
        return <TiArrowUpOutline className="icon-action" />;
    };

    const renderDownVote = () => {
        if (voteValue === -1){
            return <TiArrowDownThick className="icon-action" />;
        }
        return <TiArrowDownOutline className="icon-action" />;
    };

    const getVoteType = () => {
        if (voteValue === 1){
            return 'up-vote';
        }
        if (voteValue === -1){
            return 'down-vote';
        }

        return '';
    }


    const renderComments = () => {
        if (post.errorComments){
            return (
                <div>
                    <h3>Error has occured when loading comments!</h3>
                </div>
            );
        }


        if (post.loadingComments) {
            return(
                <div>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </div>
            )
        }

        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            )
        }
    };

    
};