import { UploadOutlined } from '@mui/icons-material';
import { Button, Modal, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import xlsx from 'node-xlsx';
import { useCallback, useState } from 'react';

type ImportOrderModalProps = {
  visible: boolean;
  onCancel: () => void;
};

export const ImportOrderModal = ({
  visible,
  onCancel,
}: ImportOrderModalProps) => {
  const [file, setFile] = useState<RcFile>();

  const handleUpload = useCallback(() => {
    const text = file?.text() ?? '';

    const foo = xlsx.parse(file);

    console.log('>>>', foo);

    onCancel();
  }, [file]);

  console.log('>>> ', file);

  return (
    <Modal
      title='导入数据'
      visible={visible}
      onCancel={onCancel}
      onOk={handleUpload}
      okButtonProps={{ disabled: !file }}
    >
      <Upload
        beforeUpload={(v) => {
          setFile(v);
          return false;
        }}
      >
        <Button
          style={{ display: 'flex', alignItems: 'center' }}
          icon={<UploadOutlined />}
        >
          上传文件
        </Button>
      </Upload>
    </Modal>
  );
};
