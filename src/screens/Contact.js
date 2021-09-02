import Form from "../components/Form.js";
const Contact = {
  render: () => {
    return `<div class="blog-detail">
            <div >
              <a href="#" class="vertical-ad">
             
              </a>
            </div>
            <div class="article-container">
            <div class="content">
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laborum labore recusandae ratione dolorum deserunt maiores,
            magni magnam ab vitae provident expedita eius alias quisquam
            tempora temporibus, molestiae consequatur esse id.
            </p>
            <div class="content-img">
            <img src="./images/contact.png" alt="" />
            </div>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laborum labore recusandae ratione dolorum deserunt maiores,
            magni magnam ab vitae provident expedita eius alias quisquam
            tempora temporibus, molestiae consequatur esse id.
            </p>
            <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laborum labore recusandae ratione dolorum deserunt maiores,
            magni magnam ab vitae provident expedita eius alias quisquam
            tempora temporibus, molestiae consequatur esse id.
            </p>
            ${Form.render()}
            </div>
            </div>
            
            </div>`;
  },
  after_render: async () => {
    if (Form.after_render) await Form.after_render();
  },
};

export default Contact;
