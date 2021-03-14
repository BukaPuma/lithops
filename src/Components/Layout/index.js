import s from './style.module.css'


const Layout = ({ title, descr, urlBg, colorBg }) => {

    const bgStyle = urlBg ? { backgroundImage: `url('${urlBg}')` } : colorBg ? { backgroundColor: colorBg } : "";




    // const backgroundColor =  colorBg ? {backgroundColor: colorBg} : null; 
    //   const backgroundImage =  urlBg ?  {backgroundImage: `url('${urlBg}')`} : null ; 
    return (

        <section style={bgStyle} className={s.root}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {title && <h3>{title}</h3>}
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {descr && <p>{descr}</p>}
                    </div>
                </article>
            </div>
        </section>
    );
}




export default Layout;