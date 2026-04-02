import numpy as np
import open3d as o3d
import open3d.visualization.gui as gui
import open3d.visualization.rendering as rendering


def main():

    app = gui.Application.instance.initialize()
    w = gui.Application.instance.create_window("Open3D Point Light Example", 1024, 768)

    scene_widget = gui.SceneWidget()
    scene_widget.scene = rendering.Open3DScene(w.renderer)
    w.add_child(scene_widget)

    material = rendering.MaterialRecord()
    material.shader = 'defaultUnlit'
    img = o3d.io.read_image('images/python_map.jpeg')
    img_np = np.asarray(img).astype(np.float32) / 255.0
    gamma = 0.5
    img_corrected = np.power(img_np, gamma)
    img = o3d.geometry.Image((img_corrected * 255.0).astype(np.uint8))
    material.albedo_img = img

    cube = o3d.geometry.TriangleMesh.create_box(create_uv_map=True)
    cube.compute_vertex_normals()
    o3d.visualization.draw({
        'name': 'box',
        'geometry': cube,
        'material': material,
        'eye': [5.0, 0.0, 0.0],
    })


if __name__ == "__main__":
    main()
