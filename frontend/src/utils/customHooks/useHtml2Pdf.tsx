import { useEffect, useRef } from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

const useHtml2Pdf = (elementId : string) : {
    convertToPDF : () => void;
} => {
    const pdfRef = useRef<jsPDF>();
    const generatePdf = async () => {
        const input = document.getElementById(elementId);
        if (!input){
            throw new Error('Element not found');
        }
        const canvas = await html2canvas(input);
        const imgData = canvas.toDataURL('imge/png');

        const pdf = new jsPDF('p', 'px', 'a4');
        pdfRef.current = pdf;

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio, "", "FAST");

        const links = input.querySelectorAll('a');
        if (links) {
            links.forEach((link) => {
                const linkRect = link.getBoundingClientRect();
                pdf.rect(linkRect.x * ratio, linkRect.y * ratio, linkRect.width * ratio, linkRect.height * ratio, 'D');
                pdf.link(linkRect.x * ratio, linkRect.y * ratio, linkRect.width * ratio, linkRect.height * ratio, { url: link.href });
            });
        }
        pdf.save("myDocument.pdf")
    }

    return {convertToPDF : generatePdf};
}

export default useHtml2Pdf;