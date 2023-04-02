import React, { useState } from 'react';
import axios from 'axios';
import { Box, Flex, Text, Button, Input, Icon, Spinner } from '@chakra-ui/react';
import { FaFileImage } from 'react-icons/fa';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setResponseData } from "../slice";
import qs from 'qs';
import '../css/style.css'

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

    let requestData: { shirtImage: string } = { shirtImage: '' }; // define requestData object

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      // console.log('Image:', file);
      // console.log('Base64:', base64);
      requestData = { shirtImage: base64 as string }; // update requestData object
    };
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.post('http://localhost:5000/shirtapi', qs.stringify(requestData), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      // console.log(response.data);      
      dispatch(setResponseData(response.data));
    } catch (error) {
      console.error('Upload error:', error);
    }

    setUploading(false);
    setFile(null);
  };



  return (
    <Flex justifyContent="center" alignItems="center" height="100vh" id='matchPage' >
      <Flex
        color={'#4E4E50'}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        bgColor={'#1A1A1D'}
        border={dragging ? '3px dashed gray' : '3px dashed gray'}
        borderRadius="20px"
        padding="6"
        textAlign="center"
        maxWidth="40vw"
        height="40vh"
        width="100%"
        transition="all 0.3s"
        _hover={{
          boxShadow: "10px 10px 20px 1px #1D1D20"
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
          <Spinner size="lg" h={'10vh'} w={'10vh'} />
        ) : (
          <>
            <Input id="fileInput" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} style={{ display: 'none' }} />
            <Button
              height={'50px'}
              width={'200px'}
              border={dragging ? '3px solid gray' : '3px dashed gray'}
              borderRadius="15px"
              leftIcon={<Icon as={FaFileImage} />}
              marginBottom="4"
              variant="solid"
              colorScheme="#1A1A1D"
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
        <Text mt={5}>
          After uploading, click on Render button in the next page
        </Text>
      </Flex>
    </Flex>
  );
}

export default ImageUploader;
