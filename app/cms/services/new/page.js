"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getImageOptions } from "@/lib/imageOptions";
import Image from "next/image";

export default function NewServicePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const imageOptions = getImageOptions();

  const [formData, setFormData] = useState({
    pragma_link: "",
    bg_image: "",
    title: "",
    description: "",
    keywords: [],
    explore_link: "",
    card: {
      intro: "",
      icon: "",
      read_more: "",
    },
    cta: {
      caption: "",
      link: "",
    },
    process: {
      bg_image: "",
      title_first: "",
      title_second: "",
      desc: "",
      steps: [],
    },
    why_choose_us: {
      title: "",
      items: [],
    },
    parent_service: "",
    bread_crumbs: [],
    active: true,
  });

  const [newKeyword, setNewKeyword] = useState("");
  const [newStep, setNewStep] = useState({ title: "", desc: "" });
  const [newWhyItem, setNewWhyItem] = useState({ title: "", desc: "" });
  const [newBreadcrumb, setNewBreadcrumb] = useState({ name: "", link: "" });

  const handleInputChange = (field, value) => {
    // Clear any existing error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }

    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      // Clear nested field errors
      const errorKey = `${parent}_${child}`;
      if (errors[errorKey]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[errorKey];
          return newErrors;
        });
      }

      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const addKeyword = () => {
    if (newKeyword.trim()) {
      setFormData((prev) => ({
        ...prev,
        keywords: [...prev.keywords, newKeyword.trim()],
      }));
      setNewKeyword("");
    }
  };

  const removeKeyword = (index) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.filter((_, i) => i !== index),
    }));
  };

  const addStep = () => {
    if (newStep.title.trim() && newStep.desc.trim()) {
      setFormData((prev) => ({
        ...prev,
        process: {
          ...prev.process,
          steps: [...prev.process.steps, { ...newStep }],
        },
      }));
      setNewStep({ title: "", desc: "" });
    }
  };

  const removeStep = (index) => {
    setFormData((prev) => ({
      ...prev,
      process: {
        ...prev.process,
        steps: prev.process.steps.filter((_, i) => i !== index),
      },
    }));
  };

  const addWhyItem = () => {
    if (newWhyItem.title.trim() && newWhyItem.desc.trim()) {
      setFormData((prev) => ({
        ...prev,
        why_choose_us: {
          ...prev.why_choose_us,
          items: [...prev.why_choose_us.items, { ...newWhyItem }],
        },
      }));
      setNewWhyItem({ title: "", desc: "" });
    }
  };

  const removeWhyItem = (index) => {
    setFormData((prev) => ({
      ...prev,
      why_choose_us: {
        ...prev.why_choose_us,
        items: prev.why_choose_us.items.filter((_, i) => i !== index),
      },
    }));
  };

  const addBreadcrumb = () => {
    if (newBreadcrumb.name.trim() && newBreadcrumb.link.trim()) {
      setFormData((prev) => ({
        ...prev,
        bread_crumbs: [...prev.bread_crumbs, { ...newBreadcrumb }],
      }));
      setNewBreadcrumb({ name: "", link: "" });
    }
  };

  const removeBreadcrumb = (index) => {
    setFormData((prev) => ({
      ...prev,
      bread_crumbs: prev.bread_crumbs.filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.pragma_link.trim())
      newErrors.pragma_link = "Pragma link is required";
    if (!formData.bg_image.trim())
      newErrors.bg_image = "Background image is required";
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (formData.keywords.length === 0)
      newErrors.keywords = "At least one keyword is required";
    if (!formData.card.icon.trim())
      newErrors.card_icon = "Card icon is required";
    if (!formData.process.bg_image.trim())
      newErrors.process_bg_image = "Process background image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Prevent scrolling to first invalid field
      e.stopPropagation();
      // Remove focus from any focused invalid field
      const focusedElement = document.activeElement;
      if (focusedElement && focusedElement.classList.contains("is-invalid")) {
        focusedElement.blur();
      }
      // Scroll to top to show error summary
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare form data with proper handling of empty parent_service
      const submitData = {
        ...formData,
        parent_service:
          formData.parent_service && formData.parent_service.trim()
            ? formData.parent_service.trim()
            : null,
      };

      const response = await fetch("/api/admin/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        router.push("/cms/services");
      } else {
        const errorData = await response.json();
        setErrors({ submit: errorData.error || "Failed to create service" });
      }
    } catch (error) {
      setErrors({ submit: "Network error occurred" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3 mb-0">Create New Service</h1>
        <a className="btn btn-outline-secondary" href="/cms/services">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Services
        </a>
      </div>

      {errors.submit && (
        <div className="alert alert-danger" role="alert">
          {errors.submit}
        </div>
      )}

      {/* Display all validation errors */}
      {Object.keys(errors).length > 0 && !errors.submit && (
        <div className="alert alert-warning" role="alert">
          <h6 className="alert-heading">Please fix the following errors:</h6>
          <ul className="mb-0">
            {Object.entries(errors).map(([field, message]) => (
              <li key={field}>
                <strong>
                  {field
                    .replace("_", " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                  :
                </strong>{" "}
                {message}
              </li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Basic Information */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Basic Information</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="title" className="form-label">
                      Title *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      maxLength={100}
                    />
                    {errors.title && (
                      <div className="invalid-feedback">{errors.title}</div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="pragma_link" className="form-label">
                      Pragma Link *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.pragma_link ? "is-invalid" : ""
                      }`}
                      id="pragma_link"
                      value={formData.pragma_link}
                      onChange={(e) =>
                        handleInputChange("pragma_link", e.target.value)
                      }
                    />
                    {errors.pragma_link && (
                      <div className="invalid-feedback">
                        {errors.pragma_link}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description *
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    id="description"
                    rows="3"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                    maxLength={500}
                  />
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="bg_image" className="form-label">
                    Background Image *
                  </label>
                  <div className="row">
                    <div className="col-md-6">
                      <select
                        className={`form-select ${
                          errors.bg_image ? "is-invalid" : ""
                        }`}
                        id="bg_image"
                        value={formData.bg_image}
                        onChange={(e) =>
                          handleInputChange("bg_image", e.target.value)
                        }
                      >
                        <option value="">Select a background image</option>
                        <optgroup label="Background Images">
                          {imageOptions.backgroundImages.map((img) => (
                            <option key={img.value} value={img.value}>
                              {img.label}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Pattern Images">
                          {imageOptions.patternImages.map((img) => (
                            <option key={img.value} value={img.value}>
                              {img.label}
                            </option>
                          ))}
                        </optgroup>
                      </select>
                      {errors.bg_image && (
                        <div className="invalid-feedback">
                          {errors.bg_image}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      {formData.bg_image && (
                        <div className="mt-2">
                          <label className="form-label">Image Preview</label>
                          <Image
                            src={formData.bg_image}
                            alt="Preview"
                            className="img-fluid rounded"
                            style={{ maxWidth: "100%", height: "auto" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="explore_link" className="form-label">
                    Explore Link
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.explore_link ? "is-invalid" : ""
                    }`}
                    id="explore_link"
                    value={formData.explore_link}
                    onChange={(e) =>
                      handleInputChange("explore_link", e.target.value)
                    }
                  />
                  {errors.explore_link && (
                    <div className="invalid-feedback">
                      {errors.explore_link}
                    </div>
                  )}
                </div>

                {/* Keywords */}
                <div className="mb-3">
                  <label className="form-label">Keywords *</label>
                  <div className="d-flex gap-2 mb-2">
                    <input
                      type="text"
                      className={`form-control ${
                        errors.keywords ? "is-invalid" : ""
                      }`}
                      value={newKeyword}
                      onChange={(e) => {
                        setNewKeyword(e.target.value);
                        // Clear keywords error when user starts typing
                        if (errors.keywords) {
                          setErrors((prev) => {
                            const newErrors = { ...prev };
                            delete newErrors.keywords;
                            return newErrors;
                          });
                        }
                      }}
                      placeholder="Add keyword"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={addKeyword}
                    >
                      Add
                    </button>
                  </div>
                  {errors.keywords && (
                    <div className="invalid-feedback">{errors.keywords}</div>
                  )}
                  <div className="d-flex flex-wrap gap-2">
                    {formData.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="badge bg-primary d-flex align-items-center gap-1"
                      >
                        {keyword}
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          onClick={() => removeKeyword(index)}
                          style={{ fontSize: "0.7em" }}
                        />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="active"
                    checked={formData.active}
                    onChange={(e) =>
                      handleInputChange("active", e.target.checked)
                    }
                  />
                  <label className="form-check-label" htmlFor="active">
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Card Information */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Card Information</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="card_intro" className="form-label">
                    Card Intro
                  </label>
                  <textarea
                    className="form-control"
                    id="card_intro"
                    rows="2"
                    value={formData.card.intro}
                    onChange={(e) =>
                      handleInputChange("card.intro", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="card_icon" className="form-label">
                    Card Icon *
                  </label>
                  <div className="row">
                    <div className="col-md-6">
                      <textarea
                        className={`form-control ${
                          errors.card_icon ? "is-invalid" : ""
                        }`}
                        id="card_icon"
                        rows="4"
                        value={formData.card.icon}
                        onChange={(e) =>
                          handleInputChange("card.icon", e.target.value)
                        }
                        placeholder="Enter SVG code or icon HTML"
                      />
                      {errors.card_icon && (
                        <div className="invalid-feedback">
                          {errors.card_icon}
                        </div>
                      )}
                    </div>
                    <div className="col-md-6">
                      {formData.card.icon && (
                        <div className="mt-2">
                          <label className="form-label">Icon Preview</label>
                          <div
                            className="border rounded p-3 d-flex align-items-center justify-content-center"
                            style={{
                              backgroundColor: "#212121",
                              borderRadius: "100%",
                              height: "120px",
                              width: "120px",
                              margin: "0 auto",
                            }}
                          >
                            <div
                              dangerouslySetInnerHTML={{
                                __html: formData.card.icon,
                              }}
                              style={{ color: "white", fontSize: "24px" }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="card_read_more" className="form-label">
                    Read More Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="card_read_more"
                    value={formData.card.read_more}
                    onChange={(e) =>
                      handleInputChange("card.read_more", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Information */}
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Call to Action</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="cta_caption" className="form-label">
                    CTA Caption
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cta_caption"
                    value={formData.cta.caption}
                    onChange={(e) =>
                      handleInputChange("cta.caption", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cta_link" className="form-label">
                    CTA Link
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cta_link"
                    value={formData.cta.link}
                    onChange={(e) =>
                      handleInputChange("cta.link", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Process Information */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Process Information</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="process_bg_image" className="form-label">
                      Process Background Image *
                    </label>
                    <select
                      className={`form-select ${
                        errors.process_bg_image ? "is-invalid" : ""
                      }`}
                      id="process_bg_image"
                      value={formData.process.bg_image}
                      onChange={(e) =>
                        handleInputChange("process.bg_image", e.target.value)
                      }
                    >
                      <option value="">Select a background image</option>
                      <optgroup label="Background Images">
                        {imageOptions.backgroundImages.map((img) => (
                          <option key={img.value} value={img.value}>
                            {img.label}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Pattern Images">
                        {imageOptions.patternImages.map((img) => (
                          <option key={img.value} value={img.value}>
                            {img.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                    {errors.process_bg_image && (
                      <div className="invalid-feedback">
                        {errors.process_bg_image}
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    {formData.process.bg_image && (
                      <div className="mt-2">
                        <label className="form-label">Image Preview</label>
                        <Image
                          src={formData.process.bg_image}
                          alt="Preview"
                          className="img-fluid rounded"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            backgroundColor: "black",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="process_title_first" className="form-label">
                      Process Title First
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="process_title_first"
                      value={formData.process.title_first}
                      onChange={(e) =>
                        handleInputChange("process.title_first", e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="process_title_second"
                      className="form-label"
                    >
                      Process Title Second
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="process_title_second"
                      value={formData.process.title_second}
                      onChange={(e) =>
                        handleInputChange(
                          "process.title_second",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="process_desc" className="form-label">
                      Process Description
                    </label>
                    <textarea
                      className="form-control"
                      id="process_desc"
                      rows="2"
                      value={formData.process.desc}
                      onChange={(e) =>
                        handleInputChange("process.desc", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* Process Steps */}
                <div className="mb-3">
                  <label className="form-label">Process Steps</label>
                  <div className="row mb-2">
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        value={newStep.title}
                        onChange={(e) =>
                          setNewStep((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Step title"
                      />
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        value={newStep.desc}
                        onChange={(e) =>
                          setNewStep((prev) => ({
                            ...prev,
                            desc: e.target.value,
                          }))
                        }
                        placeholder="Step description"
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary w-100"
                        onClick={addStep}
                      >
                        Add Step
                      </button>
                    </div>
                  </div>

                  {formData.process.steps.map((step, index) => (
                    <div key={index} className="row mb-2">
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          value={step.title}
                          readOnly
                        />
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          value={step.desc}
                          readOnly
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-outline-danger w-100"
                          onClick={() => removeStep(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Why Choose Us</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="why_title" className="form-label">
                    Why Choose Us Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="why_title"
                    value={formData.why_choose_us.title}
                    onChange={(e) =>
                      handleInputChange("why_choose_us.title", e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Why Choose Us Items</label>
                  <div className="row mb-2">
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        value={newWhyItem.title}
                        onChange={(e) =>
                          setNewWhyItem((prev) => ({
                            ...prev,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Item title"
                      />
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        value={newWhyItem.desc}
                        onChange={(e) =>
                          setNewWhyItem((prev) => ({
                            ...prev,
                            desc: e.target.value,
                          }))
                        }
                        placeholder="Item description"
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary w-100"
                        onClick={addWhyItem}
                      >
                        Add Item
                      </button>
                    </div>
                  </div>

                  {formData.why_choose_us.items.map((item, index) => (
                    <div key={index} className="row mb-2">
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          value={item.title}
                          readOnly
                        />
                      </div>
                      <div className="col-md-5">
                        <input
                          type="text"
                          className="form-control"
                          value={item.desc}
                          readOnly
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          className="btn btn-outline-danger w-100"
                          onClick={() => removeWhyItem(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="col-12">
            <div className="card mb-4">
              <div className="card-header">
                <h5 className="mb-0">Breadcrumbs</h5>
              </div>
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      value={newBreadcrumb.name}
                      onChange={(e) =>
                        setNewBreadcrumb((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      placeholder="Breadcrumb name"
                    />
                  </div>
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      value={newBreadcrumb.link}
                      onChange={(e) =>
                        setNewBreadcrumb((prev) => ({
                          ...prev,
                          link: e.target.value,
                        }))
                      }
                      placeholder="Breadcrumb link"
                    />
                  </div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100"
                      onClick={addBreadcrumb}
                    >
                      Add
                    </button>
                  </div>
                </div>

                {formData.bread_crumbs.map((breadcrumb, index) => (
                  <div key={index} className="row mb-2">
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        value={breadcrumb.name}
                        readOnly
                      />
                    </div>
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        value={breadcrumb.link}
                        readOnly
                      />
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-outline-danger w-100"
                        onClick={() => removeBreadcrumb(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Service"}
          </button>
          <a className="btn btn-outline-secondary" href="/cms/services">
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
}
