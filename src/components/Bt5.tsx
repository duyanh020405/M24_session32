import React, { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES, useState } from 'react';

export default function Bt5() {
    const [ma, setMa] = useState<string>('');
    const [ten, setTen] = useState<string>('');
    const [gia, setGia] = useState<number>();
    const [sl, setSl] = useState<number>();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newSp = {
            ma,
            ten,
            gia,
            sl
        };

        console.log(newSp);
    };

    return (
        <div style={{color:"white",flexDirection:"column",display:"flex",border:"1px solid white",}}>
            <form onSubmit={handleSubmit} style={{color:"white",flexDirection:"column",display:"flex",border:"1px solid white",}}>
                <h4>Bai 5</h4>
                    <label htmlFor="ma">Mã sản phẩm:</label>
                    <input 
                        type="text" 
                        id="ma" 
                        value={ma} 
                        onChange={(e) => setMa(e.target.value)} 
                        required 
                    />

                
                    <label htmlFor="ten">Tên sản phẩm:</label>
                    <input 
                        type="text" 
                        id="ten" 
                        value={ten} 
                        onChange={(e) => setTen(e.target.value)} 
                        required 
                    />
               
                    <label htmlFor="gia">Giá sản phẩm:</label>
                    <input 
                        type="number" 
                        id="gia" 
                        value={gia ?? ''} 
                        onChange={(e) => setGia(Number(e.target.value))} 
                        required 
                    />
                    <label htmlFor="sl">Số lượng:</label>
                    <input 
                        type="number" 
                        id="sl" 
                        value={sl ?? ''} 
                        onChange={(e) => setSl(Number(e.target.value))} 
                        required 
                    />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
