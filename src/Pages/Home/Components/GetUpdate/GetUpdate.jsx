
const getUpdate = (props) => {
    const { img, h2, p } = props;
    return (
        <>
            <div className="getUpdate">
                <img src={img} alt="images" />
                <p>{p}</p>
                <h2>{h2}</h2>
            </div>
        </>
    )
}

export default getUpdate;