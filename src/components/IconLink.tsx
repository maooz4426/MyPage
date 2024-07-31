import css from "styled-jsx/css";
import Image from "next/image";
import Link from "next/link";

interface IconLinkProps {
    src:string;
    alt:string;
    href:string;
}

const iconSize:number = 50;

// interface使う時はReact.FC使える
const IconLink: React.FC<IconLinkProps> = (props)=>{
    return(
        <div className="mx-5 transition duration-300 hover:scale-150">
            <Link href={props.href} rel="noopener noreferrer" target="_blank">
                <Image src={props.src}
                alt={props.alt}
                width={iconSize}
                height={iconSize}/>
            </Link>
        </div>
    )
}

export default IconLink;