import styled from 'styled-components'

const ProfileStyled = styled.div`
    grid-area:profile;
    /* background-color: green;  */
    .avatar {
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow: hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .name {
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }

    .username {
        margin-block: .5rem;
        font: var(--headline2-ligth);
        margin-block-end: 1.5rem;
    }

    .info {
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font: var(--body2-semi-bold);
    }
    a:hover {
        text-decoration: underline;
    }

    .buttons {
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem
    }
`

function Profile() {
    return (
        <ProfileStyled>
            <img className='avatar' src="" alt="" width="278" height="278" />
            <p className='name'>Jean Pool Justiniano</p>
            <p className='username'>Jean Dev</p>
            <div className='buttons'>
                <button>follow</button>
                <button>sponsor</button>
            </div>
            <p className='bio info'>
                hola mundo!
            </p>
            <p className='followers info'>
                ° 10 <span>followers</span> <span>°</span> 15 <span>following</span>
            </p>
            <p className='start info'>
                ° 81
            </p>
            <p className='location info'>
                ° PERÚ
            </p>
            <a className='info' href="https://leonidasesteban.com" target='_blank' rel='noreferrer'>https://JeanPoolJustiniano.com</a>
            <a className='info' href="https://leonidasesteban.com" target='_blank' rel='noreferrer'>@JeanDev</a>
        </ProfileStyled>
    )
}

export default Profile
