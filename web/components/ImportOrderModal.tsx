import { UploadOutlined } from '@mui/icons-material';
import { Button, Modal, Upload } from 'antd';

type ImportOrderModalProps = {
  visible: boolean;
  onCancel: () => void;
};

export const ImportOrderModal = ({
  visible,
  onCancel,
}: ImportOrderModalProps) => {
  return (
    <Modal title='导入数据' visible={visible} onCancel={onCancel} footer={null}>
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </Modal>
  );
};
