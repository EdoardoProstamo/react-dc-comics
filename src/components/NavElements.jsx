function NavElements(props) {

    const nav = props.NavObject;

    return <ul>
        <li> <a href="#" className="hover">{nav[0]}</a> </li>
        <li> <a href="#" className="bb-blue hover">{nav[1]}</a> </li>
        <li> <a href="#" className="hover">{nav[2]}</a> </li>
        <li> <a href="#" className="hover">{nav[3]}</a> </li>
        <li> <a href="#" className="hover">{nav[4]}</a> </li>
        <li> <a href="#" className="hover">{nav[5]}</a> </li>
        <li> <a href="#" className="hover">{nav[6]}</a> </li>
        <li> <a href="#" className="hover">{nav[7]}</a> </li>
        <li> <a href="#" className="hover">{nav[8]}</a> </li>
        <li> <a href="#" className="hover">{nav[9]}</a> </li>
    </ul>
}

export default NavElements;