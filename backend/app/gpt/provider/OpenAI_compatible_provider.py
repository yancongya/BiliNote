from typing import Optional, Union

from openai import OpenAI

from app.utils.logger import get_logger

logging= get_logger(__name__)
class OpenAICompatibleProvider:
    def __init__(self, api_key: str, base_url: str, model: Union[str, None]=None):
        self.client = OpenAI(api_key=api_key, base_url=base_url)
        self.model = model

    @property
    def get_client(self):
        return self.client

    @staticmethod
    def test_connection(api_key: str, base_url: str) -> bool:
        try:
            # 对于不需要 API 密钥的服务（如 Ollama），使用一个虚拟密钥
            # 但我们需要确保客户端能够连接到服务
            client = OpenAI(api_key=api_key, base_url=base_url)

            # 尝试列出模型，这会测试连接
            model = client.models.list()

            logging.info("连通性测试成功")
            return True
        except Exception as e:
            # 如果是 Ollama 且错误是因为没有模型，我们仍然认为连接是成功的
            error_msg = str(e).lower()
            if "ollama" in base_url.lower() and ("no models" in error_msg or "model" in error_msg and "not found" in error_msg):
                logging.info("Ollama 连通性测试完成 - 服务可访问但可能没有模型")
                return True
            else:
                logging.info(f"连通性测试失败：{e}")
                return False