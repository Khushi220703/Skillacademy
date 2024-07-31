for(let i = 0;i<5;i++)
{   
    document.write(" " + i);
    document.write( "<br/>");

    for(let j = 0;j<5;j++)
    {
        document.write(" " + j);
    }
   document.write( "<br/>");

}

for(let i = 1;i<=2;i++)
{   document.write(`${i} table`);
    document.write( "<br/>");
    for(let j = 1;j<=10;j++)
    {
        document.write(`${i} * ${j} = ${i*j}`);
        document.write( "<br/>");
    } 
    document.write( "<br/>");
}

for(let i = 1;i<=5;i++)
{
    document.write("<br/>");
    for(let j = 1;j<=i;j++)
    {
        document.write(j);
    }
    

}

for(let i = 1;i<=5;i++)
    {
        document.write("<br/>");
        for(let j = 1;j<=i;j++)
        {
            document.write(i);
        }
        
    
    }