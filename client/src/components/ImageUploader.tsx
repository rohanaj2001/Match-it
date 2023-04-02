import React, { useState } from 'react';
import axios from 'axios';
import { Box, Flex, Text, Button, Input, Icon, Spinner } from '@chakra-ui/react';
import { FaFileImage } from 'react-icons/fa';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResponseData } from "../slice";

function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg')) {
      setFile(selectedFile);
    } else {
      setFile(null);
      alert('Please select a PNG or JPEG file');
    }
  };
  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file');
      return;
    }
  
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      console.log('Image:', file);
      console.log('Base64:', base64);
    };
    reader.readAsDataURL(file);
  
    const formData = new FormData();
    formData.append('image', file);
  
    setUploading(true);
  
    try {
      const response = await axios.post('/api/upload', formData);
      console.log('Upload response:', response);
      dispatch(setResponseData(response.data));
    } catch (error) {
      console.error('Upload error:', error);
    }
  
    setUploading(false);
    setFile(null);
  };
  

  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" id='matchPage' bgColor={'#90CDF4'}>
      <Box
        border={dragging ? '2px dashed green' : '2px dashed gray'}
        borderRadius="md"
        padding="6"
        textAlign="center"
        maxWidth="500px"
        width="100%"
        transition="all 0.3s"
        _hover={{
          boxShadow: 'lg',
        }}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => {
          event.preventDefault();
          setDragging(false);
          handleFileChange({ target: { files: event.dataTransfer.files } } as React.ChangeEvent<HTMLInputElement>);
        }}
      >
        {uploading ? (
          <Spinner size="lg" />
        ) : (
          <>
            <Input id="fileInput" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} style={{ display: 'none' }} />
            <Button
              leftIcon={<Icon as={FaFileImage} />}
              marginBottom="4"
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                const fileInput = document.querySelector('#fileInput') as HTMLInputElement;
                if (fileInput) {
                  fileInput.click();
                }

              }}
            >
              Select File
            </Button>
            {file && (
              <>
                <Text marginBottom="4">
                  Selected file: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </Text>
                <Button onClick={handleUpload} variant="solid" colorScheme="green">
                  Upload
                </Button>
              </>
            )}
            {!file && (
              <Text>
                Drag and drop an image file here, or click to select a file
              </Text>
            )}
          </>
        )}
      </Box>
    </Flex>
  );
}

export default ImageUploader;
