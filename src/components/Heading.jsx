const Heading = ({title, subTitle}) => {
    return (
        <div className="my-4 space-y-5 text-white">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">{title}</h1>
            <p className="text-base font-light">{subTitle}</p>
        </div>
    );
};

export default Heading;