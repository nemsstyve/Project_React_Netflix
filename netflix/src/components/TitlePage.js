const TitlePage = (props) => {
    return (
        <div className="title__page">
            <h1>
                {props.title}
            </h1>
            <center><p style={{textAlign: 'justify'}}>
                {props.description}
            </p>
            </center>
        </div>
    );
}

export default TitlePage;
