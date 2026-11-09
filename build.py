import os
import json
import base64

def inject_secrets():
    print("Securing and injecting scripts from GitHub Secrets...")
    
    # Cloudflare dashboard par jo secret aap save karenge, yeh use yahan se read karega
    secret_json_str = os.environ.get('MY_SECRET_JS_CODE', '{}')
    
    try:
        secrets_map = json.loads(secret_json_str)
    except Exception as e:
        print("Error: Secret JSON sahi format mein nahi hai ya khali hai!", e)
        return

    # Aapka bataya hua mapping matrix
    mapping = {
        'soft.html': 'soft.mt.js',
        'game/13.html': '13.mt.js',
        'game/2.html': '2.mt.js',
        'game/20.html': '20.mt.js',
        'game/3-pro.html': '3.mt.js',
        'game/4.html': '4.mt.js',
        'game/5.html': '5.mt.js'
    }

    for html_path, js_key in mapping.items():
        if os.path.exists(html_path):
            if js_key in secrets_map:
                raw_code = secrets_map[js_key]
                # Code ko Base64 mein convert karna taaki source code safe rahe
                base64_code = base64.b64encode(raw_code.encode('utf-8')).decode('utf-8')
                
                with open(html_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # HTML ke andar placeholder ko replace karna
                secure_content = content.replace('/*SECRET_SCRIPT_HERE*/', base64_code)
                
                with open(html_path, 'w', encoding='utf-8') as f:
                    f.write(secure_content)
                    
                print(f"Kamyabi se {js_key} ka code {html_path} mein inject ho gaya.")
            else:
                print(f"Warning: {js_key} ka code JSON mein nahi mila!")
        else:
            print(f"Warning: {html_path} file nahi mili!")

if __name__ == "__main__":
    inject_secrets()
