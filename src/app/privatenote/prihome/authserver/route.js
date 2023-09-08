import { NextResponse } from "next/server"

  export  function  GET(req,co){
return NextResponse.json({success:true})
}

export function POST(){
    return NextResponse.json({success:true})
}