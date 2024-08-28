import React, { useState } from 'react';

const PdfUploader = (props) => {
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();

      reader.onloadend = () => {
        const blob = new Blob([reader.result], { type: 'application/pdf' });
        setPdfBlob(blob);
      };

      reader.readAsArrayBuffer(file);
    } else {
      alert('Por favor, selecione um arquivo PDF.');
    }
  };

  return (
    <div>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      {pdfBlob && (
        <div>
          <p>Arquivo PDF carregado com sucesso!</p>
          <a href={URL.createObjectURL(pdfBlob)} target="_blank" rel="noopener noreferrer">
            Visualizar PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default PdfUploader;