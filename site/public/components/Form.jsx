import React from 'react'
import Form from 'c/Form'
import { CheckboxGroup, Checkbox } from 'c/CheckboxGroup'
import { Select, Option} from 'c/Select'
import Pre from '../Pre'
import { Props, Prop } from '../Props'

const FormItem = Form.Item;
let isSuccess;
const Demo = React.createClass({ 

  //初始化表单数据。
  getInitialState() {
    return { 
      isSubmit:false,    
      task: '',
      desc: '',
      train: ['apple','huawei'],
      fields: ['apple', 'mi']
    }
  },

  //submit按钮提交操作
  handleSubmit(e) {    
    this.setState({isSubmit:true}); 
    let o = this.state;
    delete o.isSubmit;
    Form.Validate(isSuccess) ? console.log('表单验证通过：'+JSON.stringify(o)):console.log('表单验证失败');     
    e.preventDefault();
  },

  //获取验证是否通过状态，并存放到isSuccess数组中。
  isSuccess(flag){   
    isSuccess.push(flag);
  },

  /*
   *设置表单字段值。
   */
  taskChange(e){
    this.setState({task:e.target.value})
  },
  descCahnge(e){
     this.setState({desc:e.target.value})
  },
  fieldsChange(selects) {
    this.setState({ selects });
  },
  trainChange(selected,text){
    this.setState({ train:selected });
  },

  render() {   

    isSuccess = [];  
    const validates = [{
      validateVal: this.state.task,
      required: '请填写任务名称',
      handle: function() {
        let s;
        if (!this.validateVal && this.required) {
          s = this.required;
        } else if (this.validateVal.length > 10) {
          s = '字符长度不能超过10个';
        } else {
          s = 'success'
        }
        return s;
      }
    }, {
      validateVal: this.state.desc,
      handle: function() {
        let s;
        if (this.validateVal.length > 20) {
          s = '字符长度不能超过20个';
        } else {
          s = 'success'
        }
        return s;
      }
    }, {
      validateVal: this.state.fields,
      required: '请设置字段',
      handle: function() {
        let s;
        if (this.validateVal.length == 0) {
          s = this.required;
        } else {
          s = 'success';
        }
        return s;
      }
    }];
   

    return (
      <div style={{border:'1px solid #ddd',padding:'20px 10px'}}>

        <Form horizontal onSubmit={this.handleSubmit} isSuccess={this.isSuccess} sibmitStatus={this.state.isSubmit}>

          <FormItem label="任务名称：" validate={validates[0]} required>
            <input type="text" className="form-control" onChange={this.taskChange}/>        
          </FormItem>

          <FormItem label="任务描述："  validate={validates[1]}>
            <textarea  rows="4" className="form-control" onChange={this.descCahnge}/>        
          </FormItem>

          <FormItem label="训练数据：">
            <Select selected={this.state.train} onChange={this.trainChange} multiple>
              <Option value="apple">苹果</Option>
              <Option value="mi">小米</Option>
              <Option value="samsung">三星</Option>
              <Option value="huawei">华为</Option>
            </Select>
          </FormItem>

          <FormItem label="字段设置：" validate={validates[2]} required>
            <CheckboxGroup selects = {this.state.fields} onChange={this.fieldsChange}>
              <Checkbox value="apple">苹果</Checkbox>
              <Checkbox value="mi">小米</Checkbox>
              <Checkbox value="samsung">三星</Checkbox>
              <Checkbox value="huawei">华为</Checkbox>
            </CheckboxGroup>
          </FormItem>

          <FormItem submit>
            <button type="submit" className="btn btn-default">登录</button>
          </FormItem>

        </Form>
      </div>
    );
  }

});

export default React.createClass({
  render() {
    return (
      <div>
        <h1>表单</h1>
        <Pre>
{`
import Form from 'bfd-ui/lib/Form'
import { CheckboxGroup, Checkbox } from 'bfd-ui/lib/CheckboxGroup'
import { Select ,Option} from 'bfd-ui/lib/Select'
const FormItem = Form.Item;
let isSuccess;
const Demo = React.createClass({ 
  //初始化表单数据。
  getInitialState() {
    return { 
      isSubmit:false,    
      task: '',
      desc: '',
      train: ['apple','huawei'],
      fields: ['apple', 'mi']
    }
  },
  //submit按钮提交操作
  handleSubmit(e) {    
    this.setState({isSubmit:true}); 
    let o = this.state;
    delete o.isSubmit;
    Form.Validate(isSuccess) ? console.log('表单验证通过：'+JSON.stringify(o)):console.log('表单验证失败');     
    e.preventDefault();
  },
  //获取验证是否通过状态，并存放到isSuccess数组中。
  isSuccess(flag){   
    isSuccess.push(flag);
  },
  /*
   *设置表单字段值。
   */
  taskChange(e){
    this.setState({task:e.target.value})
  },
  descCahnge(e){
     this.setState({desc:e.target.value})
  },
  fieldsChange(selects) {
    this.setState({ selects });
  },
  trainChange(selected,text){
    this.setState({ train:selected });
  },
  render() { 
    isSuccess = [];  
    const validates = [{
      validateVal: this.state.task,
      required: '请填写任务名称',
      handle: function() {
        let s;
        if (!this.validateVal && this.required) {
          s = this.required;
        } else if (this.validateVal.length > 10) {
          s = '字符长度不能超过10个';
        } else {
          s = 'success'
        }
        return s;
      }
    }, {
      validateVal: this.state.desc,
      handle: function() {
        let s;
        if (this.validateVal.length > 20) {
          s = '字符长度不能超过20个';
        } else {
          s = 'success'
        }
        return s;
      }
    }, {
      validateVal: this.state.fields,
      required: '请设置字段',
      handle: function() {
        let s;
        if (this.validateVal.length == 0) {
          s = this.required;
        } else {
          s = 'success';
        }
        return s;
      }
    }];
    return (      
        <Form horizontal onSubmit={this.handleSubmit} isSuccess={this.isSuccess} sibmitStatus={this.state.isSubmit}>
          <FormItem label="任务名称：" validate={validates[0]} required>
            <input type="text" className="form-control" onChange={this.taskChange}/>        
          </FormItem>
          <FormItem label="任务描述："  validate={validates[1]}>
            <textarea  rows="4" className="form-control" onChange={this.descCahnge}/>        
          </FormItem>
          <FormItem label="训练数据：">
            <Select selected={this.state.train} onChange={this.trainChange} multiple>
              <Option value="apple">苹果</Option>
              <Option value="mi">小米</Option>
              <Option value="samsung">三星</Option>
              <Option value="huawei">华为</Option>
            </Select>
          </FormItem>
          <FormItem label="字段设置：" validate={validates[2]} required>
            <CheckboxGroup selects = {this.state.fields} onChange={this.fieldsChange}>
              <Checkbox value="apple">苹果</Checkbox>
              <Checkbox value="mi">小米</Checkbox>
              <Checkbox value="samsung">三星</Checkbox>
              <Checkbox value="huawei">华为</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem submit>
            <button type="submit" className="btn btn-default">登录</button>
          </FormItem>
        </Form>
    );
  }
});

  const App = React.createClass({
      render() {
        return <Demo/>
      }
  })
  `}
        </Pre>

        <Demo/>  

        <Props title="Form 属性">
          <Prop name="onSubmit" type="Function" desc="表单提交按钮" required></Prop>
          <Prop name="isSuccess" type="Function" desc="获取每个FormItem是否验证通过" required></Prop>
          <Prop name="sibmitStatus" type="Boolean" desc="设置提交按钮状态。设置为true则一开始就验证，设置为false则点了提交按钮才验证。" required></Prop>
        </Props> 
        <Props title="FormItem 属性">
          <Prop name="label" type="String" desc="表单字段名称" required></Prop>
          <Prop name="validate" type="Object" desc="验证条件" required></Prop>
          <Prop name="required" type="Boolean" desc="是否必须"></Prop>
          <Prop name="submit" type="Boolean" desc="表示是submit提交按钮"></Prop>
        </Props> 

    </div>
    )
  }
})