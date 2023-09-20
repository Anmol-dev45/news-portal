interface Props {
    text: string;
    color: 'white' | 'black';
    fullSize?: boolean;
}

const NewsDescription: React.FC<Props> = ({ text, color, fullSize }) => {
    const maxLengthForMobile = 100
    const maxLengthForDesktop = 150
    const truncatedTextForMobile = fullSize ? text : text.substring(0, maxLengthForMobile) + '...'
    const truncatedTextForDesktop = fullSize ? text : text.substring(0, maxLengthForDesktop) + '...'


    return (
        <>
            <p className={`${color == 'white' ? 'text-gray-300' : 'text-dark/[0.7]'} text-base max-md:text-xs text-left max-md:hidden`}>
                {truncatedTextForDesktop}
            </p>  <p className={`${color == 'white' ? 'text-gray-300' : 'text-dark/[0.7]'}     text-base max-md:text-xs text-left md:hidden first-line:`}>
                {truncatedTextForMobile}
            </p>
        </>
    )

}

export default NewsDescription