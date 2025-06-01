import { API_BASE_URL } from "./constant";

type ApiResponse<T> = {
  // Tってなんの型
  success: boolean;
  data?: T;
  error?: string;
};

export async function apiFetch<T>(
  endpoint: string,
  method: string = "GET",
  /**
   * next/headersのheaders()を使って直接スプレッドしようすると400エラーになるので使用をやめた
   * シンプルなヘッダー設定に変更することで、400エラーが解決された
   */
  options?: {
    body?: unknown;
    headers?: Record<string, string>;
  }
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: options?.body ? JSON.stringify(options.body) : undefined,
    });
    console.log("res", res);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error(`API error (${endpoint})`, error);
    return { success: false, error: String(error) };
  }
}
