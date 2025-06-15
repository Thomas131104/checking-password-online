from zxcvbn import zxcvbn
import hashlib
import requests

def is_password_breached(password):
    # Băm SHA-1
    sha1 = hashlib.sha1(password.encode('utf-8')).hexdigest().upper()
    prefix = sha1[:5]
    suffix = sha1[5:]

    # Gửi prefix lên HIBP API
    url = f"https://api.pwnedpasswords.com/range/{prefix}"
    response = requests.get(url)

    if response.status_code != 200:
        raise RuntimeError("Lỗi khi gọi API HaveIBeenPwned")

    # So sánh hậu tố (suffix)
    hashes = response.text.splitlines()
    for line in hashes:
        hash_suffix, count = line.split(':')
        if hash_suffix == suffix:
            return True  # Mật khẩu đã bị rò rỉ

    return False  # Không bị rò rỉ

def checking_password(password):
    if password == "":
        return {
            "score": -1,
            "breached": False,
            "feedback": {
                "warning": "Bạn chưa nhập mật khẩu.",
                "suggestions": []
            }
        }

    result = zxcvbn(password)
    breached = is_password_breached(password)

    return {
        "score": result["score"],
        "breached": breached,
        "crack_time": result["crack_times_display"]["offline_slow_hashing_1e4_per_second"],
        "feedback": result["feedback"]
    }
