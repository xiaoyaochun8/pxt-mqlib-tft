namespace mqlib{
    // 16x16 汉字点阵结构
    export interface CN16TftChar {
        str: string;       // 汉字
        dot: number[];   // 32 字节点阵
    }

    // 只包含：中、文
    export const CN16Tft: CN16TftChar[] = [
        {
            str: "中",
            dot: [
                //左8列，右8列
                0x01, 0xc0,
                0x03, 0xc0,
                0x01, 0xc0,
                0x7f, 0xfe,
                0x7f, 0xfe,
                0x73, 0xce,
                0x73, 0xce,
                0x73, 0xce, //前8行
                0x7f, 0xfe,
                0x7f, 0xfe,
                0x7f, 0xfe,
                0x63, 0xc6,
                0x03, 0xc0,
                0x03, 0xc0,
                0x03, 0xc0,
                0x03, 0xc0 //后8行
            ]
            /*
            0b x 2列 x 16行
            */
        },
        {
            str: "床",
            dot: [
                0x01, 0xc0,
                0x01, 0xc0,
                0x7f, 0xff,
                0x7f, 0xff,
                0x70, 0xc0,
                0x70, 0xe0,
                0x7f, 0xff,
                0x7f, 0xff,
                0x73, 0xf0,
                0x77, 0xf8,
                0x77, 0xfc,
                0x7e, 0xfe,
                0xfe, 0xef,
                0xfc, 0xe7,
                0xf8, 0xe3,
                0xc0, 0xe0
            ]
        }
    ];

    // 查找汉字
    export function findCN16Tft(ch: string): CN16TftChar | null {
        let result = CN16Tft.find(item => item.str === ch)
        if(result){
            return result
        }else{
            return null
        }
    }
}
