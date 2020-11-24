export class HttpClient {
    /**
     * 请求一个URL
     * @param url 
     */
    public async GetStringAsync(url: string): Promise<string> {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('get', url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                    // 从服务器获得数据 
                    // fn.call(this, xhr.responseText);
                    resolve(xhr.responseText);
                }
            }
            xhr.onerror = (err) => {
                reject(err)
            }
            xhr.setRequestHeader("Content-Type", "text");
            xhr.send();
        })

    }
}