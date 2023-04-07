import { Highlight } from '../types/hightlight';
// // import { useHighlight } from '../contexts/HighlightContext';

// export async function fetchHighlights(): Promise<Highlight[]> {
//     const response = await fetch('http://localhost:3000/highlights');
//     const data = await response.json();
//     return data;
// }
// export async function storeHighlight(text: string, summary: string, url: string): Promise<void> {
//     const { setHighlights }:any = useHighlight();
//     const response = await fetch("http://localhost:3000/highlights", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text, summary, url }),
//     });
//     const newHighlight = await response.json();
//     setHighlights((prevHighlights:any) => [...prevHighlights, newHighlight]);
// }