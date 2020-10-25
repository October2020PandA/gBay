from django.db import models
import bcrypt
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# class UserManager(models.Manager):
#     def validator(self,postData):
#         errors={}
#         email_confirm = EMAIL_REGEX
#         if len(postData['email'])<1:
#             errors['email'] = 'Please enter your email'
#         elif not email_confirm.match(postData['email']):
#             errors['email'] = 'Email must be valid'
        
#         post_email = self.filter(email=postData['email'])
#         if len(post_email)>0:
#             errors['email'] = "This email already is in use"
        
#         post_user = self.filter(user_name=postData['user_name'])
#         if len(post_user)>0:
#             errors['user_name'] = "This user name is unavailable"
        
        
#         if len(postData['user_name']) < 2:
#             errors['user_name'] = "User name must be at least 2 characters"
        
#         if len(postData['first_name']) < 2:
#             errors['first_name'] = "First name must be at least 2 characters"
        
#         if len(postData['last_name']) < 2:
#             errors['last_name'] = "Last name must be at least 2 characters"
        
#         if len(postData['password']) < 8:
#             errors['password'] = "Password must be at least 8 characters"
        
#         if postData['password'] != postData['confirmPass']:
#             errors['password'] = "These passwords don't match"
#         return errors 

#     def log_validator(self, postData):
#         errors={}
#         email_confirm = EMAIL_REGEX
#         if len(postData['email'])<1:
#             errors['email'] = 'Please enter your email address'
#         elif not email_confirm.match(postData['email']):
#             errors['email'] = 'Email must be valid'
#         if len(postData['password']) < 8:
#             errors['password'] = "Password must be at least 8 characters"
#         post_email = self.filter(email=postData['email'])
#         if len(post_email)== 0:
#             errors['email'] = "Email/Password does not match"
#         elif not bcrypt.checkpw(postData['password'].encode(), post_email[0].password.encode()):
#             errors['email'] = "Email/Password does not match"
#         return errors

class ProductManager(models.Manager):
    def validator(self,postData):
        errors={}
        if len(postData['name']) < 1:
            errors['name'] = "Product name must be at least 1 characters"
        if len(postData['desc']) < 2:
            errors['desc'] = "Product description must be at least 2 characters"
        return errors

class User(models.Model):
    user_name = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    # rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = UserManager()

class Product(models.Model):
    name = models.CharField(max_length=255)
    desc = models.CharField(max_length=255)
    atype = models.CharField(max_length=255)
    image = models.ImageField(upload_to='post_images', null=True)
    price = models.IntegerField()
    sold = models.BooleanField(default=False)
    quantity = models.IntegerField()
    rating = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # objects = ProductManager()