interface Props {
    text: string;
    color: 'white' | 'black'
}

const NewsDescription: React.FC<Props> = ({ text, color }) => {
    const maxLengthForMobile = 200
    const maxLengthForDesktop = 200
    const truncatedTextForMobile = text.substring(0, maxLengthForMobile) + '...'
    const truncatedTextForDesktop = text.substring(0, maxLengthForDesktop) + '...'


    return (
        <>
            <p className={`${color == 'white'? 'text-gray-300': 'text-dark/[0.7]'} text-base max-md:text-xs text-left max-md:hidden`}>
                {truncatedTextForDesktop}
            </p>  <p className={`${color == 'white'? 'text-gray-300': 'text-dark/[0.7]'}     text-base max-md:text-xs text-left md:hidden first-line:`}>
                {truncatedTextForMobile}
            </p>
        </>
    )

}

export default NewsDescription