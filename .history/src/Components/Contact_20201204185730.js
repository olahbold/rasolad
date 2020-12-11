import { Form, Input,  Button } from 'antd';
import emailjs from 'emailjs-com';
import React, { useState } from "react";



const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
    },  
  };

export default function Contact() {

const [state, setstate] = useState(
  {
    name : '',
    email :'',
    in
  }
)




  function sendEmail(values) {
    values.preventDefault(); 
  emailjs.sendForm('service_r7tdbx7', 'template_271cfqm', values, 'user_S6txx0c4RPx1hpw2TQ8Nt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
        <div>
            
    <Form {...layout} name="nest-messages" onFinish={sendEmail} validateMessages={validateMessages}>
      <Form.Item
        name={ 'name'}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={ 'email'}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item name={'introduction'} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
 </div>
    )
}
