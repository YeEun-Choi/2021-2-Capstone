import { useRef } from "react";

const ScoreInput = ({ mutate }) => {

    const userRef = useRef(null);
    const scoreRef = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const userNickName = userRef.current.value;
        const userScore = scoreRef.current.value;
        userRef.current.value = '';
        scoreRef.current.value = '';
        mutate(userNickName, userScore);
    }

    return (
        <form onSubmit={onSubmit} >
            <textarea name="" id="" ref={userRef} placeholder={''} />
            <textarea name="" id="" ref={scoreRef} placeholder={''} />
            <button type={'submit'}>전송</button>
        </form>
    )
};

export default ScoreInput;