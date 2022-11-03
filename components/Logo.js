import Link from "next/link"



export default function Logo(){
  return( 
  <div>
   <Link href={"/"}>
          <a  className="logo">
            <h1>Curriculum Vitae</h1>
            <p>Madalena Pascoal</p>
          </a>
        </Link></div>
  )
};
