function MenuElements(props) {
    const menu = props.MenuTitle;
    const nav = props.NavObject;

    return <div className='main-menu'>
        <div>
            <h3>{menu[0]}</h3>
            <ul>
                <a href="#" className="hover"><li>{nav[0]}</li></a>
                <a href="#" className="hover"><li>{nav[1]}</li></a>
                <a href="#" className="hover"><li>{nav[2]}</li></a>
                <a href="#" className="hover"><li>{nav[3]}</li></a>
                <a href="#" className="hover"><li>{nav[4]}</li></a>
                <a href="#" className="hover"><li>{nav[5]}</li></a>
                <a href="#" className="hover"><li>{nav[6]}</li></a>
                <a href="#" className="hover"><li>{nav[8]}</li></a>
            </ul>
        </div>
        <div>
            <h3>{menu[1]}</h3>
            <ul>
                <a href="#" className="hover"><li>{nav[10]}</li></a>
                <a href="#" className="hover"><li>{nav[11]}</li></a>
            </ul>
        </div>
        <div>
            <h3>{menu[2]}</h3>
            <ul>
                <a href="#" className="hover"><li>{nav[12]}</li></a>
                <a href="#" className="hover"> <li>{nav[13]}</li></a>
                <a href="#" className="hover"><li>{nav[14]}</li></a>
                <a href="#" className="hover"><li>{nav[15]}</li></a>
                <a href="#" className="hover"> <li>{nav[16]}</li></a>
                <a href="#" className="hover"><li>{nav[17]}</li></a>
                <a href="#" className="hover"><li>{nav[18]}</li></a>
                <a href="#" className="hover"><li>{nav[19]}</li></a>
                <a href="#" className="hover"><li>{nav[20]}</li></a>
                <a href="#" className="hover"> <li>{nav[21]}</li></a>
                <a href="#" className="hover"><li>{nav[22]}</li></a>
            </ul>
        </div>
        <div>
            <h3>{menu[3]}</h3>
            <ul>
                <a href="#" className="hover"><li>{menu[2]}</li></a>
                <a href="#" className="hover"> <li>{nav[23]}</li></a>
                <a href="#" className="hover"><li>{nav[24]}</li></a>
                <a href="#" className="hover"><li>{nav[25]}</li></a>
                <a href="#" className="hover"><li>{nav[26]}</li></a>
            </ul>
        </div>
    </div>
}

export default MenuElements;