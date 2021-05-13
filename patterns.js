var x,y,chr;
    for(x=1; x <=6; x++)
    {
        for (y=1; y < x; y++)
        {
            chr=chr+("*");        
        }
        console.log(chr);
        chr='';    
    }
 

    for(x=6;x>=1;x--)
     {
     //inner loop
      for(y=1;y<=x;y++)
      {
        chr=chr+("*");        
    }
    console.log(chr);
    chr='';    
}