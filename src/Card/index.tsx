import './style.scss'

type CardProps = {
    title: string,
    avatar: string
}

export const Card = ({title, avatar}: CardProps) => {
    return(
        <div className="card">
            <img src={avatar} alt="" />
            <p>{title}</p>
        </div>
    )
        
}