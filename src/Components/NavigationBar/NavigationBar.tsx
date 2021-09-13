//styling imports
import "./NavigationBar.css"

interface NavigationMenuItem
{
    title:string;
    class:string,
    url:string;
}

const menuItems: Array<NavigationMenuItem> =
[
    {title: "Home", class: "nav-item", url: "/"},
    {title: "About", class: "nav-item", url: "/about"},
    {title: "Software Projects", class: "nav-item", url: "/software"},
    {title: "Youtube", class: "nav-item", url: "/youtube"},
]

export default function Navigationbar()
{
    return(
        <div className="nav">
            <div className="nav-left">
                <div className="nav-title">
                    Joris van Rheden
                </div>
            </div>
            <div className="nav-right">
                <ul className="nav-menu">
                    {/* using curly braces for scripting in a div element */}
                    {
                        menuItems.map((item:NavigationMenuItem, index) => 
                        (
                            <li key={index}>
                                <a className={item.class} href={item.url}>
                                    {item.title}
                                </a>
                            </li>                  
                        ))
                    }
                </ul>
            </div>       
        </div>    
    )
}